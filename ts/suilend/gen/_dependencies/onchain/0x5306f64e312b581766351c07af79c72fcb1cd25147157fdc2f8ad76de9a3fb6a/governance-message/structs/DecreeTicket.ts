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
  phantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../../../_framework/util.js";
import { Bytes32 } from "../../bytes32/structs/index.js";
import { PKG_V1 } from "../../constants.js";
import { ExternalAddress } from "../../external-address/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isDecreeTicket(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::governance_message::DecreeTicket` + "<");
}

export interface DecreeTicketFields<T0 extends PhantomTypeArgument> {
  governanceChain: ToField<"u16">;
  governanceContract: ToField<ExternalAddress>;
  moduleName: ToField<Bytes32>;
  action: ToField<"u8">;
  global: ToField<"bool">;
}

export type DecreeTicketReified<T0 extends PhantomTypeArgument> = Reified<
  DecreeTicket<T0>,
  DecreeTicketFields<T0>
>;

/**
 * Move struct: `DecreeTicket`
 * Module: `5306f64e312b581766351c07af79c72fcb1cd25147157fdc2f8ad76de9a3fb6a::governance_message`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class DecreeTicket<T0 extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::governance_message::DecreeTicket`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = DecreeTicket.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::governance_message::DecreeTicket<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = DecreeTicket.$isPhantom;

  readonly governanceChain: ToField<"u16">;
  readonly governanceContract: ToField<ExternalAddress>;
  readonly moduleName: ToField<Bytes32>;
  readonly action: ToField<"u8">;
  readonly global: ToField<"bool">;

  private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: DecreeTicketFields<T0>) {
    this.$fullTypeName = composeSuiType(
      DecreeTicket.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::governance_message::DecreeTicket<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.governanceChain = fields.governanceChain;
    this.governanceContract = fields.governanceContract;
    this.moduleName = fields.moduleName;
    this.action = fields.action;
    this.global = fields.global;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): DecreeTicketReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: DecreeTicket.$typeName,
      fullTypeName: composeSuiType(
        DecreeTicket.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V1}::governance_message::DecreeTicket<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>],
      isPhantom: DecreeTicket.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) => DecreeTicket.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => DecreeTicket.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => DecreeTicket.fromBcs(T0, data),
      bcs: DecreeTicket.bcs,
      fromJSONField: (field: any) => DecreeTicket.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => DecreeTicket.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) => DecreeTicket.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) => DecreeTicket.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) => DecreeTicket.fetch(client, T0, id),
      new: (fields: DecreeTicketFields<ToPhantomTypeArgument<T0>>) => {
        return new DecreeTicket([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return DecreeTicket.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<DecreeTicket<ToPhantomTypeArgument<T0>>>> {
    return phantom(DecreeTicket.reified(T0));
  }
  static get p() {
    return DecreeTicket.phantom;
  }

  static get bcs() {
    return bcs.struct("DecreeTicket", {
      governance_chain: bcs.u16(),
      governance_contract: ExternalAddress.bcs,
      module_name: Bytes32.bcs,
      action: bcs.u8(),
      global: bcs.bool(),
    });
  }

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): DecreeTicket<ToPhantomTypeArgument<T0>> {
    return DecreeTicket.reified(typeArg).new({
      governanceChain: decodeFromFields("u16", fields.governance_chain),
      governanceContract: decodeFromFields(ExternalAddress.reified(), fields.governance_contract),
      moduleName: decodeFromFields(Bytes32.reified(), fields.module_name),
      action: decodeFromFields("u8", fields.action),
      global: decodeFromFields("bool", fields.global),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): DecreeTicket<ToPhantomTypeArgument<T0>> {
    if (!isDecreeTicket(item.type)) {
      throw new Error("not a DecreeTicket type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return DecreeTicket.reified(typeArg).new({
      governanceChain: decodeFromFieldsWithTypes("u16", item.fields.governance_chain),
      governanceContract: decodeFromFieldsWithTypes(
        ExternalAddress.reified(),
        item.fields.governance_contract,
      ),
      moduleName: decodeFromFieldsWithTypes(Bytes32.reified(), item.fields.module_name),
      action: decodeFromFieldsWithTypes("u8", item.fields.action),
      global: decodeFromFieldsWithTypes("bool", item.fields.global),
    });
  }

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): DecreeTicket<ToPhantomTypeArgument<T0>> {
    return DecreeTicket.fromFields(typeArg, DecreeTicket.bcs.parse(data));
  }

  toJSONField() {
    return {
      governanceChain: this.governanceChain,
      governanceContract: this.governanceContract.toJSONField(),
      moduleName: this.moduleName.toJSONField(),
      action: this.action,
      global: this.global,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): DecreeTicket<ToPhantomTypeArgument<T0>> {
    return DecreeTicket.reified(typeArg).new({
      governanceChain: decodeFromJSONField("u16", field.governanceChain),
      governanceContract: decodeFromJSONField(ExternalAddress.reified(), field.governanceContract),
      moduleName: decodeFromJSONField(Bytes32.reified(), field.moduleName),
      action: decodeFromJSONField("u8", field.action),
      global: decodeFromJSONField("bool", field.global),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): DecreeTicket<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== DecreeTicket.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(DecreeTicket.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return DecreeTicket.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): DecreeTicket<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isDecreeTicket(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a DecreeTicket object`);
    }
    return DecreeTicket.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): DecreeTicket<ToPhantomTypeArgument<T0>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isDecreeTicket(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a DecreeTicket object`);
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

      return DecreeTicket.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return DecreeTicket.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<DecreeTicket<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching DecreeTicket object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isDecreeTicket(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a DecreeTicket object`);
    }

    return DecreeTicket.fromSuiObjectData(typeArg, res.data);
  }
}
