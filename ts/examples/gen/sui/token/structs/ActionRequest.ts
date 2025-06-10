import { Option } from "../../../_dependencies/source/0x1/option/structs/index.js";
import { String } from "../../../_dependencies/source/0x1/string/structs/index.js";
import { TypeName } from "../../../_dependencies/source/0x1/type-name/structs/index.js";
import {
  PhantomReified,
  PhantomToTypeStr,
  PhantomTypeArgument,
  Reified,
  StructClass,
  ToField,
  ToPhantomTypeArgument,
  ToTypeStr,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  fieldToJSON,
  phantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { Balance } from "../../balance/structs/index.js";
import { PKG_V31 } from "../../constants.js";
import { VecSet } from "../../vec-set/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isActionRequest(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::token::ActionRequest` + "<");
}

export interface ActionRequestFields<T extends PhantomTypeArgument> {
  name: ToField<String>;
  amount: ToField<"u64">;
  sender: ToField<"address">;
  recipient: ToField<Option<"address">>;
  spentBalance: ToField<Option<Balance<T>>>;
  approvals: ToField<VecSet<TypeName>>;
}

export type ActionRequestReified<T extends PhantomTypeArgument> = Reified<
  ActionRequest<T>,
  ActionRequestFields<T>
>;

/**
 * Move struct: `ActionRequest`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T - Type parameter 0 (phantom)
 */
export class ActionRequest<T extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::token::ActionRequest`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = ActionRequest.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::token::ActionRequest<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = ActionRequest.$isPhantom;

  readonly name: ToField<String>;
  readonly amount: ToField<"u64">;
  readonly sender: ToField<"address">;
  readonly recipient: ToField<Option<"address">>;
  readonly spentBalance: ToField<Option<Balance<T>>>;
  readonly approvals: ToField<VecSet<TypeName>>;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>],
    fields: ActionRequestFields<T>,
  ) {
    this.$fullTypeName = composeSuiType(
      ActionRequest.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::token::ActionRequest<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.name = fields.name;
    this.amount = fields.amount;
    this.sender = fields.sender;
    this.recipient = fields.recipient;
    this.spentBalance = fields.spentBalance;
    this.approvals = fields.approvals;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): ActionRequestReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: ActionRequest.$typeName,
      fullTypeName: composeSuiType(
        ActionRequest.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V31}::token::ActionRequest<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
      ],
      isPhantom: ActionRequest.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) =>
        ActionRequest.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        ActionRequest.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => ActionRequest.fromBcs(T, data),
      bcs: ActionRequest.bcs,
      fromJSONField: (field: any) => ActionRequest.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => ActionRequest.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        ActionRequest.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        ActionRequest.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) =>
        ActionRequest.fetch(client, T, id),
      new: (fields: ActionRequestFields<ToPhantomTypeArgument<T>>) => {
        return new ActionRequest([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ActionRequest.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<ToTypeStr<ActionRequest<ToPhantomTypeArgument<T>>>> {
    return phantom(ActionRequest.reified(T));
  }
  static get p() {
    return ActionRequest.phantom;
  }

  static get bcs() {
    return bcs.struct("ActionRequest", {
      name: String.bcs,
      amount: bcs.u64(),
      sender: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      recipient: Option.bcs(
        bcs.bytes(32).transform({
          input: (val: string) => fromHex(val),
          output: (val: Uint8Array) => toHex(val),
        }),
      ),
      spent_balance: Option.bcs(Balance.bcs),
      approvals: VecSet.bcs(TypeName.bcs),
    });
  }

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): ActionRequest<ToPhantomTypeArgument<T>> {
    return ActionRequest.reified(typeArg).new({
      name: decodeFromFields(String.reified(), fields.name),
      amount: decodeFromFields("u64", fields.amount),
      sender: decodeFromFields("address", fields.sender),
      recipient: decodeFromFields(Option.reified("address"), fields.recipient),
      spentBalance: decodeFromFields(
        Option.reified(Balance.reified(typeArg)),
        fields.spent_balance,
      ),
      approvals: decodeFromFields(
        VecSet.reified(TypeName.reified()),
        fields.approvals,
      ),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): ActionRequest<ToPhantomTypeArgument<T>> {
    if (!isActionRequest(item.type)) {
      throw new Error("not a ActionRequest type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return ActionRequest.reified(typeArg).new({
      name: decodeFromFieldsWithTypes(String.reified(), item.fields.name),
      amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
      sender: decodeFromFieldsWithTypes("address", item.fields.sender),
      recipient: decodeFromFieldsWithTypes(
        Option.reified("address"),
        item.fields.recipient,
      ),
      spentBalance: decodeFromFieldsWithTypes(
        Option.reified(Balance.reified(typeArg)),
        item.fields.spent_balance,
      ),
      approvals: decodeFromFieldsWithTypes(
        VecSet.reified(TypeName.reified()),
        item.fields.approvals,
      ),
    });
  }

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): ActionRequest<ToPhantomTypeArgument<T>> {
    return ActionRequest.fromFields(typeArg, ActionRequest.bcs.parse(data));
  }

  toJSONField() {
    return {
      name: this.name,
      amount: this.amount.toString(),
      sender: this.sender,
      recipient: fieldToJSON<Option<"address">>(
        `${Option.$typeName}<address>`,
        this.recipient,
      ),
      spentBalance: fieldToJSON<Option<Balance<T>>>(
        `${Option.$typeName}<${Balance.$typeName}<${this.$typeArgs[0]}>>`,
        this.spentBalance,
      ),
      approvals: this.approvals.toJSONField(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    field: any,
  ): ActionRequest<ToPhantomTypeArgument<T>> {
    return ActionRequest.reified(typeArg).new({
      name: decodeFromJSONField(String.reified(), field.name),
      amount: decodeFromJSONField("u64", field.amount),
      sender: decodeFromJSONField("address", field.sender),
      recipient: decodeFromJSONField(
        Option.reified("address"),
        field.recipient,
      ),
      spentBalance: decodeFromJSONField(
        Option.reified(Balance.reified(typeArg)),
        field.spentBalance,
      ),
      approvals: decodeFromJSONField(
        VecSet.reified(TypeName.reified()),
        field.approvals,
      ),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): ActionRequest<ToPhantomTypeArgument<T>> {
    if (json.$typeName !== ActionRequest.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(ActionRequest.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return ActionRequest.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): ActionRequest<ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isActionRequest(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a ActionRequest object`,
      );
    }
    return ActionRequest.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): ActionRequest<ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isActionRequest(data.bcs.type)
      ) {
        throw new Error(`object at is not a ActionRequest object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = compressSuiType(gotTypeArgs[0]);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (gotTypeArg !== compressSuiType(extractType(typeArg))) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`,
        );
      }

      return ActionRequest.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ActionRequest.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<ActionRequest<ToPhantomTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching ActionRequest object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isActionRequest(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a ActionRequest object`);
    }

    return ActionRequest.fromSuiObjectData(typeArg, res.data);
  }
}
