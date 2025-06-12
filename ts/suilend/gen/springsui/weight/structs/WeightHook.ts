import { Bag } from "../../../_dependencies/onchain/0x2/bag/structs/index.js";
import { UID } from "../../../_dependencies/onchain/0x2/object/structs/index.js";
import { VecMap } from "../../../_dependencies/onchain/0x2/vec-map/structs/index.js";
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
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { PKG_V1 } from "../../constants.js";
import { AdminCap } from "../../liquid-staking/structs/index.js";
import { Version } from "../../version/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isWeightHook(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::weight::WeightHook` + "<");
}

export interface WeightHookFields<T0 extends PhantomTypeArgument> {
  id: ToField<UID>;
  validatorAddressesAndWeights: ToField<VecMap<"address", "u64">>;
  totalWeight: ToField<"u64">;
  adminCap: ToField<AdminCap<T0>>;
  version: ToField<Version>;
  extraFields: ToField<Bag>;
}

export type WeightHookReified<T0 extends PhantomTypeArgument> = Reified<
  WeightHook<T0>,
  WeightHookFields<T0>
>;

/**
 * Move struct: `WeightHook`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::weight`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class WeightHook<T0 extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::weight::WeightHook`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = WeightHook.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::weight::WeightHook<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = WeightHook.$isPhantom;

  readonly id: ToField<UID>;
  readonly validatorAddressesAndWeights: ToField<VecMap<"address", "u64">>;
  readonly totalWeight: ToField<"u64">;
  readonly adminCap: ToField<AdminCap<T0>>;
  readonly version: ToField<Version>;
  readonly extraFields: ToField<Bag>;

  private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: WeightHookFields<T0>) {
    this.$fullTypeName = composeSuiType(
      WeightHook.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::weight::WeightHook<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.validatorAddressesAndWeights = fields.validatorAddressesAndWeights;
    this.totalWeight = fields.totalWeight;
    this.adminCap = fields.adminCap;
    this.version = fields.version;
    this.extraFields = fields.extraFields;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): WeightHookReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: WeightHook.$typeName,
      fullTypeName: composeSuiType(
        WeightHook.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V1}::weight::WeightHook<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>],
      isPhantom: WeightHook.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) => WeightHook.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => WeightHook.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => WeightHook.fromBcs(T0, data),
      bcs: WeightHook.bcs,
      fromJSONField: (field: any) => WeightHook.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => WeightHook.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) => WeightHook.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) => WeightHook.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) => WeightHook.fetch(client, T0, id),
      new: (fields: WeightHookFields<ToPhantomTypeArgument<T0>>) => {
        return new WeightHook([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return WeightHook.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<WeightHook<ToPhantomTypeArgument<T0>>>> {
    return phantom(WeightHook.reified(T0));
  }
  static get p() {
    return WeightHook.phantom;
  }

  static get bcs() {
    return bcs.struct("WeightHook", {
      id: UID.bcs,
      validator_addresses_and_weights: VecMap.bcs(
        bcs.bytes(32).transform({
          input: (val: string) => fromHex(val),
          output: (val: Uint8Array) => toHex(val),
        }),
        bcs.u64(),
      ),
      total_weight: bcs.u64(),
      admin_cap: AdminCap.bcs,
      version: Version.bcs,
      extra_fields: Bag.bcs,
    });
  }

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): WeightHook<ToPhantomTypeArgument<T0>> {
    return WeightHook.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      validatorAddressesAndWeights: decodeFromFields(
        VecMap.reified("address", "u64"),
        fields.validator_addresses_and_weights,
      ),
      totalWeight: decodeFromFields("u64", fields.total_weight),
      adminCap: decodeFromFields(AdminCap.reified(typeArg), fields.admin_cap),
      version: decodeFromFields(Version.reified(), fields.version),
      extraFields: decodeFromFields(Bag.reified(), fields.extra_fields),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): WeightHook<ToPhantomTypeArgument<T0>> {
    if (!isWeightHook(item.type)) {
      throw new Error("not a WeightHook type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return WeightHook.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      validatorAddressesAndWeights: decodeFromFieldsWithTypes(
        VecMap.reified("address", "u64"),
        item.fields.validator_addresses_and_weights,
      ),
      totalWeight: decodeFromFieldsWithTypes("u64", item.fields.total_weight),
      adminCap: decodeFromFieldsWithTypes(AdminCap.reified(typeArg), item.fields.admin_cap),
      version: decodeFromFieldsWithTypes(Version.reified(), item.fields.version),
      extraFields: decodeFromFieldsWithTypes(Bag.reified(), item.fields.extra_fields),
    });
  }

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): WeightHook<ToPhantomTypeArgument<T0>> {
    return WeightHook.fromFields(typeArg, WeightHook.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      validatorAddressesAndWeights: this.validatorAddressesAndWeights.toJSONField(),
      totalWeight: this.totalWeight.toString(),
      adminCap: this.adminCap.toJSONField(),
      version: this.version.toJSONField(),
      extraFields: this.extraFields.toJSONField(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): WeightHook<ToPhantomTypeArgument<T0>> {
    return WeightHook.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      validatorAddressesAndWeights: decodeFromJSONField(
        VecMap.reified("address", "u64"),
        field.validatorAddressesAndWeights,
      ),
      totalWeight: decodeFromJSONField("u64", field.totalWeight),
      adminCap: decodeFromJSONField(AdminCap.reified(typeArg), field.adminCap),
      version: decodeFromJSONField(Version.reified(), field.version),
      extraFields: decodeFromJSONField(Bag.reified(), field.extraFields),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): WeightHook<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== WeightHook.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(WeightHook.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return WeightHook.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): WeightHook<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isWeightHook(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a WeightHook object`);
    }
    return WeightHook.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): WeightHook<ToPhantomTypeArgument<T0>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isWeightHook(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a WeightHook object`);
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

      return WeightHook.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return WeightHook.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<WeightHook<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching WeightHook object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isWeightHook(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a WeightHook object`);
    }

    return WeightHook.fromSuiObjectData(typeArg, res.data);
  }
}
