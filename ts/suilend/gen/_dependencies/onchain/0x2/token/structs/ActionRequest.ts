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
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../../../_framework/util.js";
import { Option } from "../../../0x1/option/structs/index.js";
import { String } from "../../../0x1/string/structs/index.js";
import { TypeName } from "../../../0x1/type-name/structs/index.js";
import { Balance } from "../../balance/structs/index.js";
import { PKG_V35 } from "../../constants.js";
import { VecSet } from "../../vec-set/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isActionRequest(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V35}::token::ActionRequest` + "<");
}

export interface ActionRequestFields<T0 extends PhantomTypeArgument> {
  name: ToField<String>;
  amount: ToField<"u64">;
  sender: ToField<"address">;
  recipient: ToField<Option<"address">>;
  spentBalance: ToField<Option<Balance<T0>>>;
  approvals: ToField<VecSet<TypeName>>;
}

export type ActionRequestReified<T0 extends PhantomTypeArgument> = Reified<
  ActionRequest<T0>,
  ActionRequestFields<T0>
>;

/**
 * Move struct: `ActionRequest`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class ActionRequest<T0 extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::token::ActionRequest`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = ActionRequest.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::token::ActionRequest<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = ActionRequest.$isPhantom;

  readonly name: ToField<String>;
  readonly amount: ToField<"u64">;
  readonly sender: ToField<"address">;
  readonly recipient: ToField<Option<"address">>;
  readonly spentBalance: ToField<Option<Balance<T0>>>;
  readonly approvals: ToField<VecSet<TypeName>>;

  private constructor(
    typeArgs: [PhantomToTypeStr<T0>],
    fields: ActionRequestFields<T0>,
  ) {
    this.$fullTypeName = composeSuiType(
      ActionRequest.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::token::ActionRequest<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.name = fields.name;
    this.amount = fields.amount;
    this.sender = fields.sender;
    this.recipient = fields.recipient;
    this.spentBalance = fields.spentBalance;
    this.approvals = fields.approvals;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): ActionRequestReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: ActionRequest.$typeName,
      fullTypeName: composeSuiType(
        ActionRequest.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V35}::token::ActionRequest<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T0>>,
      ],
      isPhantom: ActionRequest.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) =>
        ActionRequest.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        ActionRequest.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => ActionRequest.fromBcs(T0, data),
      bcs: ActionRequest.bcs,
      fromJSONField: (field: any) => ActionRequest.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => ActionRequest.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        ActionRequest.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        ActionRequest.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) =>
        ActionRequest.fetch(client, T0, id),
      new: (fields: ActionRequestFields<ToPhantomTypeArgument<T0>>) => {
        return new ActionRequest([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ActionRequest.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<ActionRequest<ToPhantomTypeArgument<T0>>>> {
    return phantom(ActionRequest.reified(T0));
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

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): ActionRequest<ToPhantomTypeArgument<T0>> {
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

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): ActionRequest<ToPhantomTypeArgument<T0>> {
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

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): ActionRequest<ToPhantomTypeArgument<T0>> {
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
      spentBalance: fieldToJSON<Option<Balance<T0>>>(
        `${Option.$typeName}<${Balance.$typeName}<${this.$typeArgs?.[0]}>>`,
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

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): ActionRequest<ToPhantomTypeArgument<T0>> {
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

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): ActionRequest<ToPhantomTypeArgument<T0>> {
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

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): ActionRequest<ToPhantomTypeArgument<T0>> {
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

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): ActionRequest<ToPhantomTypeArgument<T0>> {
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
      const gotTypeArg = gotTypeArgs[0] as string;
      const compressedGotType = compressSuiType(gotTypeArg);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (compressedGotType !== expectedTypeArg) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
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

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<ActionRequest<ToPhantomTypeArgument<T0>>> {
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
